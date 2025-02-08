export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "userId",
      title: "User ID",
      type: "string",
    },
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "orderTotal",
      title: "Order Total",
      type: "number",
    },
    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "price", title: "Price", type: "number" },
          ],
        },
      ],
    },
    {
      name: "orderStatus",
      title: "Order Status",
      type: "string",
      options: {
        list: ["Order Confirmed", "Processing", "Shipped", "Delivered"],
      },
    },
  ],
};
