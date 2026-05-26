'use client';
import Button, { ButtonProps } from '@mui/material/Button';

interface AppButtonProps extends ButtonProps {
  label: string;
}

export function SecondaryButton({ label, ...props }: AppButtonProps) {
  return (
    <Button
      variant="outlined"
      size="medium"
      {...props}
      sx={{
        color: '#000000',
        borderColor: '#000000',
        textTransform: 'none',
        fontWeight: 500,
        borderRadius: '8px',
        px: 3,
        py: 1,
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          borderColor: '#000000',
        },
        '&:active': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
        '&.Mui-disabled': {
          borderColor: 'rgba(0, 0, 0, 0.12)',
          color: 'rgba(0, 0, 0, 0.38)',
        },
        ...props.sx,
      }}
    >
      {label}
    </Button>
  );
}
