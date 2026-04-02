"use server";

import type { ApiResponse, Product, Category } from "@/app/types";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://mm-assesment-server.vercel.app/api/v1";

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const json: ApiResponse<Product[]> = await res.json();

  if (!json.success) {
    throw new Error(json.message || "Failed to fetch products");
  }

  return json.data;
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const json: ApiResponse<Category[]> = await res.json();

  if (!json.success) {
    throw new Error(json.message || "Failed to fetch categories");
  }

  return json.data;
}

export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  const res = await fetch(
    `${BASE_URL}/products/category/${encodeURIComponent(category)}`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch products for category: ${category}`);
  }

  const json: ApiResponse<Product[]> = await res.json();

  if (!json.success) {
    throw new Error(json.message || "Failed to fetch products by category");
  }

  return json.data;
}

export async function getProduct(id: number): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product with id: ${id}`);
  }

  const json: ApiResponse<Product> = await res.json();

  if (!json.success) {
    throw new Error(json.message || "Failed to fetch product");
  }

  return json.data;
}
