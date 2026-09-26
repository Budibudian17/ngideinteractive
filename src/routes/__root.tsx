import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";
import { Error404 } from "../components/Error404";

function NotFoundComponent() {
  return <Error404 />;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="film-grain min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_70%)]" />
      
      <div className="relative z-10 max-w-2xl px-6 text-center">
        <div className="mb-8 flex items-center justify-center gap-3 font-mono text-[10px] uppercase text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span>Critical Error</span>
        </div>

        <div className="mb-6 font-display text-[clamp(4rem,15vw,8rem)] font-bold uppercase leading-none tracking-tighter">
          <span className="outline-type">ERR</span>
        </div>

        <h1 className="mb-4 font-display text-2xl font-bold uppercase md:text-3xl">
          System Failure
        </h1>
        
        <p className="mb-12 max-w-md mx-auto text-sm leading-relaxed text-muted-foreground md:text-base">
          A critical error occurred in our systems. Our engineers have been notified and are working to resolve the issue.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="h-14 rounded-none bg-foreground px-8 font-display text-xs font-bold uppercase text-background hover:bg-soft transition-all"
          >
            System Reboot
          </button>
          <Link
            to="/"
            className="inline-flex h-14 items-center justify-center rounded-none border border-border px-8 font-display text-xs font-bold uppercase hover:bg-card hover:text-foreground transition-all"
          >
            Emergency Return
          </Link>
        </div>

        <div className="mt-16 font-mono text-[9px] uppercase text-muted-foreground/50">
          NGI-CRIT // DEPOK SECTOR // 6.4025° S // 106.8188° E
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Ngide Interactive" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/ngideinteractive.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
