import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes, AppShell } from "../App";

export function renderRouteBody(pathname: string): string {
  return renderToString(
    <React.StrictMode>
      <AppShell>
        <StaticRouter location={pathname}>
          <AppRoutes />
        </StaticRouter>
      </AppShell>
    </React.StrictMode>
  );
}
