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

export async function addRecipe(formData: FormData) { 
    await prisma.recipes.create({
        data: {
            name: formData.get("name") as string,
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