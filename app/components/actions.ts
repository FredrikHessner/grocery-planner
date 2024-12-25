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