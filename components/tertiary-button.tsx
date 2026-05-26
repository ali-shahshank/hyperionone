'use client';
import Button, { ButtonProps } from '@mui/material/Button';

interface AppButtonProps extends ButtonProps {
  label: string;
}

// ── Tertiary ──────────────────────────────────────────
export function TertiaryButton({ label, ...props }: AppButtonProps) {
  return (
    <Button
      variant="text"
      size="medium"
      {...props}
      sx={{
        color: '#000000',
        textTransform: 'none',
        fontWeight: 500,
        borderRadius: '8px',
        px: 3,
        py: 1,
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
        '&:active': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
        '&.Mui-disabled': {
          color: 'rgba(0, 0, 0, 0.38)',
        },
        ...props.sx,
      }}
    >
      {label}
    </Button>
  );
}
