export interface ImageComponentProps {
  src: string;
  alt?: string;
  minHeight?: number; // Minimum height in pixels
  maxWidth?: number; // Maximum width in pixels
  rounded?: boolean; // Toggle rounded borders
  opacity?: number; // Image opacity (0 to 1)
  className?: string; // Additional class names
}
