# Component Structure Documentation

## Cấu trúc Components

Dự án đã được tái cấu trúc với hệ thống components có tổ chức theo từng folder chức năng:

```
src/components/
├── layout/           # Components layout chính
│   ├── Header.tsx    # Header với navigation
│   ├── Footer.tsx    # Footer với thông tin liên hệ
│   └── index.ts      # Export file
├── section/          # Components sections của trang
│   ├── TravelBlog.tsx        # Blog và tin tức
│   ├── AffordableCruises.tsx # Gói cruise giá rẻ
│   ├── CruiseItineraries.tsx # Lộ trình cruise
│   └── index.ts      # Export file
└── ui/               # UI components tái sử dụng
    └── index.ts      # Export file (placeholder)
```

## Cách sử dụng

### Layout Components

```typescript
import { Header, Footer } from "@/components/layout";

// Sử dụng trong page
<Header />;
{
  /* Content */
}
<Footer />;
```

### Section Components

```typescript
import { TravelBlog, AffordableCruises, CruiseItineraries } from "@/components/section";

// Sử dụng trong page
<TravelBlog />
<AffordableCruises />
<CruiseItineraries />
```

## Đặc điểm Components

### Header Component

- **Props**: `className?: string`
- **Features**:
  - Navigation responsive
  - Mobile menu
  - Smooth scroll
  - Fixed header với opacity effect

### Footer Component

- **Props**: `className?: string`
- **Features**:
  - Company info
  - Quick links
  - Contact information
  - Contact form

### Section Components

- **Tất cả section components đều**:
  - Responsive design
  - Framer Motion animations
  - Consistent styling với Tailwind CSS
  - TypeScript support

## Ưu điểm của cấu trúc mới

1. **Tái sử dụng**: Components có thể được sử dụng ở nhiều trang khác nhau
2. **Bảo trì**: Dễ dàng cập nhật và sửa lỗi
3. **Tổ chức**: Code được sắp xếp logic theo chức năng
4. **Type Safety**: Full TypeScript support
5. **Performance**: Tree shaking tự động loại bỏ code không sử dụng

## Hướng dẫn mở rộng

### Thêm UI Component mới

```typescript
// src/components/ui/Button.tsx
interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button({ variant = "primary", children }: ButtonProps) {
  // Component logic
}

// Export trong src/components/ui/index.ts
export { default as Button } from "./Button";
```

### Thêm Section Component mới

```typescript
// src/components/section/NewSection.tsx
export default function NewSection() {
  // Component logic
}

// Export trong src/components/section/index.ts
export { default as NewSection } from "./NewSection";
```

## Best Practices

1. **Naming**: Sử dụng PascalCase cho component names
2. **Props Interface**: Luôn định nghĩa interface cho props
3. **Default Props**: Sử dụng default parameters thay vì defaultProps
4. **Animations**: Sử dụng Framer Motion cho animations consistent
5. **Styling**: Sử dụng Tailwind CSS classes
6. **Responsive**: Đảm bảo tất cả components đều responsive
