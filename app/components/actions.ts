"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addGrocery(formData: FormData) { 
    await prisma.groceries.create({
        data: {
            item: formData.get("item") as string,
            quantity: Number(formData.get("quantity")),
            measurement: formData.get("measurement") as string,

        },
    });

    revalidatePath("/");
}
export async function removeGrocery({item}) {
    await prisma.groceries.delete({
      where: { item } });

    revalidatePath("/");
}

export async function removeRecipe({id}) {
    await prisma.recipes.delete({
      where: { id } });

    revalidatePath("/");
}

function slugify(str: string) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
    str = str.toLowerCase(); // convert string to lowercase
    str = str.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
             .replace(/\s+/g, '-') // replace spaces with hyphens
             .replace(/-+/g, '-'); // remove consecutive hyphens
    return str;
  }

export async function addRecipe(formData: FormData) { 
    const name = formData.get("name") as string;
    const name_slug = slugify(name) as string;

    // Create the recipe in the database
    await prisma.recipes.create({
        data: {
        name,
        name_slug,
        description: formData.get("description") as string,
        instructions: formData.get("instructions") as string,
        prep_time: Number(formData.get("prep_time")),
        cook_time: Number(formData.get("cook_time")),
        servings: Number(formData.get("servings")),
        difficulty: formData.get("difficulty") as string,
        },
    });

    revalidatePath("/");
}