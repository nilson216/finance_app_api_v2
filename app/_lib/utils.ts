// `ClassValue` tipa entradas de classes; `clsx` monta classes condicionalmente.
import { type ClassValue, clsx } from "clsx";
// `twMerge` resolve conflitos de classes do Tailwind (ex.: p-2 vs p-4).
import { twMerge } from "tailwind-merge";

// Função utilitária para combinar classes CSS de forma segura com Tailwind.
export function cn(...inputs: ClassValue[]) {
  // Primeiro o `clsx` junta tudo, depois o `twMerge` remove conflitos.
  return twMerge(clsx(inputs));
}
