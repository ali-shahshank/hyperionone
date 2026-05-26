'use client';
import Button, { ButtonProps } from '@mui/material/Button';

interface AppButtonProps extends ButtonProps {
  label: string;
}

// ── Primary ───────────────────────────────────────────
export function PrimaryButton({ label, ...props }: AppButtonProps) {
  return (
    <Button
      variant="contained"
      size="medium"
      {...props}
      sx={{
        backgroundColor: '#0000FF',
        color: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 500,
        borderRadius: '8px',
        px: 3,
        py: 1,
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#0000CC',
          boxShadow: '0px 4px 12px rgba(0, 0, 255, 0.3)',
        },
        '&:active': {
          backgroundColor: '#0000AA',
          boxShadow: 'none',
        },
        '&.Mui-disabled': {
          backgroundColor: 'rgba(0, 0, 255, 0.3)',
          color: 'rgba(255, 255, 255, 0.5)',
        },
        ...props.sx,
      }}
    >
      {label}
    </Button>
  );
}
