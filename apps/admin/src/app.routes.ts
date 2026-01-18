import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "login",
        loadComponent: () => import("./pages/login/login")
    },
    {
        path: "",
        loadComponent: () => import("./pages/layout/layout"),
        children: [
            {
                path: "",
                loadComponent: () => import("./pages/home/home")
            }
        ]
    }
];
