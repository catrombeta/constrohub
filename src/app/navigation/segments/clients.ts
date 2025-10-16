import { NavigationTree } from "@/@types/navigation";

export const clients: NavigationTree = {
  id: "clients",
  type: "item",
  path: "/clients",
  title: "Clientes",
  transKey: "nav.clients.clients",
  icon: "clients",
  childs: [
    {
      id: "list",
      type: "item",
      path: "/clients/list",
      title: "Lista",
      transKey: "nav.clients.list",
      icon: "clients.list",
    }
  ],
}