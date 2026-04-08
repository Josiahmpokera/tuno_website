import type { ComponentPropsWithoutRef } from "react"

type IconProps = ComponentPropsWithoutRef<"svg"> & {
  title?: string
}

function Svg({ title, children, ...props }: IconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

export function IconSparkles(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 2l1.2 4.2L17.4 7.4l-4.2 1.2L12 12.8l-1.2-4.2L6.6 7.4l4.2-1.2L12 2z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M19 12l.7 2.4 2.3.6-2.3.6L19 18l-.7-2.4-2.3-.6 2.3-.6L19 12z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function IconShieldCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12.3l2.2 2.2L15.7 9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function IconUsers(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M16 11a3 3 0 100-6 3 3 0 000 6zM8 11a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M21 20v-1.2c0-2-1.6-3.6-3.6-3.6H14.5M3 20v-1.2c0-2 1.6-3.6 3.6-3.6h2.9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </Svg>
  )
}

export function IconArrowRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function IconCoins(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 5c3.6 0 6.5 1.3 6.5 3s-2.9 3-6.5 3-6.5-1.3-6.5-3 2.9-3 6.5-3z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5.5 8v4c0 1.7 2.9 3 6.5 3s6.5-1.3 6.5-3V8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M5.5 12v4c0 1.7 2.9 3 6.5 3s6.5-1.3 6.5-3v-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </Svg>
  )
}

export function IconRepeat(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M7 7h10l-2-2M17 17H7l2 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7a7 7 0 000 10M17 17a7 7 0 000-10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </Svg>
  )
}
