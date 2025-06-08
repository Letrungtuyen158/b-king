# UI Components Documentation

## Tổng quan

Thư viện UI components được thiết kế để tái sử dụng trong toàn bộ ứng dụng Halong Bay Tours. Tất cả components đều được xây dựng với TypeScript và Tailwind CSS.

## Components

### Button

Component Button với nhiều variants và sizes khác nhau.

#### Props

```typescript
interface ButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "success"
    | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}
```

#### Sử dụng

```tsx
import { Button } from "@/components/ui";

// Primary button
<Button variant="primary" size="lg">
  Book Now
</Button>

// Outline button
<Button variant="outline" fullWidth>
  Save to Wishlist
</Button>

// Loading button
<Button loading variant="primary">
  Processing...
</Button>

// Success button
<Button variant="success" size="sm">
  Share the Tour
</Button>
```

#### Variants

- **primary**: Blue background, white text (default)
- **secondary**: Gray background, dark text
- **outline**: White background with border
- **ghost**: Transparent background
- **success**: Green background, white text
- **danger**: Red background, white text

#### Sizes

- **sm**: Small (h-9, px-3, text-sm)
- **md**: Medium (h-10, px-4) - default
- **lg**: Large (h-12, px-6, text-lg)

---

### Input

Component Input với label, error handling và helper text.

#### Props

```typescript
interface InputProps {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  type?: string; // "text", "email", "date", etc.
}
```

#### Sử dụng

```tsx
import { Input } from "@/components/ui";

// Basic input
<Input
  label="From"
  type="date"
  value={fromDate}
  onChange={(e) => setFromDate(e.target.value)}
  fullWidth
/>

// Input with error
<Input
  label="Email"
  type="email"
  error="Please enter a valid email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// Input with helper text
<Input
  label="Phone"
  type="tel"
  helperText="Include country code"
  placeholder="+84 123 456 789"
/>
```

#### Features

- ✅ Auto-generated ID từ label
- ✅ Accessibility support với htmlFor
- ✅ Error states với red styling
- ✅ Helper text support
- ✅ Full width option
- ✅ Focus states

---

### Select

Component Select với label và options.

#### Props

```typescript
interface SelectProps {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  options?: SelectOption[];
  placeholder?: string;
  children?: React.ReactNode;
}

interface SelectOption {
  value: string | number;
  label: string;
}
```

#### Sử dụng

```tsx
import { Select } from "@/components/ui";

// Với children (recommended)
<Select
  label="No. Of Adults"
  value={adults}
  onChange={(e) => setAdults(Number(e.target.value))}
  fullWidth
>
  {[1, 2, 3, 4, 5, 6].map((num) => (
    <option key={num} value={num}>
      {num}
    </option>
  ))}
</Select>

// Với options array
<Select
  label="Country"
  options={[
    { value: "vn", label: "Vietnam" },
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" }
  ]}
  placeholder="Select a country"
  fullWidth
/>

// Với error
<Select
  label="Package"
  error="Please select a package"
  value={selectedPackage}
  onChange={(e) => setSelectedPackage(e.target.value)}
>
  <option value="basic">Basic Package</option>
  <option value="premium">Premium Package</option>
</Select>
```

---

## Best Practices

### 1. Consistent Styling

Tất cả components sử dụng cùng color scheme và spacing:

- Primary color: Blue-600
- Focus ring: Blue-500
- Error color: Red-600
- Border radius: 8px (rounded-lg)

### 2. Accessibility

- ✅ Proper label associations
- ✅ Focus management
- ✅ ARIA attributes
- ✅ Keyboard navigation

### 3. Responsive Design

- Sử dụng `fullWidth` prop cho mobile layouts
- Components tự động responsive với Tailwind breakpoints

### 4. Error Handling

```tsx
// Good: Clear error message
<Input
  label="Email"
  error="Please enter a valid email address"
  value={email}
/>

// Bad: Generic error
<Input
  label="Email"
  error="Error"
  value={email}
/>
```

### 5. Loading States

```tsx
// Good: Disable và show loading
<Button loading disabled>
  Processing...
</Button>

// Bad: Không có feedback
<Button onClick={handleSubmit}>
  Submit
</Button>
```

## Customization

### Extending Styles

Sử dụng `className` prop để override styles:

```tsx
<Button variant="primary" className="shadow-lg transform hover:scale-105">
  Custom Button
</Button>
```

### Custom Variants

Để thêm variant mới, cập nhật trong component definition:

```tsx
// Button.tsx
const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  // ... existing variants
  warning: "bg-yellow-600 text-white hover:bg-yellow-700", // New variant
};
```

## Examples trong Project

### Cruise Detail Page Booking Form

```tsx
<Input
  label="From"
  type="date"
  value={fromDate}
  onChange={(e) => setFromDate(e.target.value)}
  fullWidth
/>

<Input
  label="To"
  type="date"
  value={toDate}
  onChange={(e) => setToDate(e.target.value)}
  fullWidth
/>

<div className="grid grid-cols-2 gap-4">
  <Select
    label="No. Of Adults"
    value={adults}
    onChange={(e) => setAdults(Number(e.target.value))}
    fullWidth
  >
    {[1, 2, 3, 4, 5, 6].map((num) => (
      <option key={num} value={num}>{num}</option>
    ))}
  </Select>

  <Select
    label="No. Of Children"
    value={children}
    onChange={(e) => setChildren(Number(e.target.value))}
    fullWidth
  >
    {[0, 1, 2, 3, 4].map((num) => (
      <option key={num} value={num}>{num}</option>
    ))}
  </Select>
</div>

<Button
  onClick={handleBooking}
  variant="primary"
  size="lg"
  fullWidth
>
  Check Availability
</Button>
```

## Utilities

### cn() Function

Utility function để combine classNames:

```tsx
import { cn } from "@/lib/utils";

// Combines và merge Tailwind classes
const className = cn(
  "base-class",
  condition && "conditional-class",
  props.className
);
```

Sử dụng `clsx` và `tailwind-merge` để handle conflicts và conditional classes.
