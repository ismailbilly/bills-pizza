"use client"

import { LoginCard } from "./login-card";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial = false
}: CardWrapperProps) => {
    return (
        <LoginCard>
            {children}
      </LoginCard>  
    )
}