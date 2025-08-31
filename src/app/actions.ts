"use server";

import { z } from "zod";

const checkoutFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  cep: z.string().min(8, "CEP inválido"),
  address: z.string().min(1, "Endereço é obrigatório"),
  number: z.string().min(1, "Número é obrigatório"),
  complement: z.string().optional(),
  city: z.string().min(1, "Cidade é obrigatória"),
  state: z.string().min(2, "UF inválido").max(2, "UF inválido"),
});

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CreateOrderInput = {
  formData: z.infer<typeof checkoutFormSchema>;
  cart: CartItem[];
  cartTotal: number;
};

export async function createOrder(input: CreateOrderInput) {
  const validatedForm = checkoutFormSchema.safeParse(input.formData);

  if (!validatedForm.success) {
    // Retornando um objeto simples para o frontend
    return { success: false, error: "Dados do formulário inválidos." };
  }

  if (input.cart.length === 0) {
    return { success: false, error: "Seu carrinho está vazio." };
  }

  // Simulação de sucesso sem backend
  console.log("Pedido recebido (simulação):", {
    customer: validatedForm.data,
    items: input.cart.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
    total: input.cartTotal,
  });

  const simulatedOrderId = Math.floor(Math.random() * 100000).toString();

  return { success: true, orderId: simulatedOrderId };
}
