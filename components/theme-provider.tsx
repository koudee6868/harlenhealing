// components/theme-provider.tsx

"use client";

import * as React from "react";
// Sửa lại dòng import dưới đây để gộp cả type và component
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}