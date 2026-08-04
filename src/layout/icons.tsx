import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string }

function lucide(props: IconProps): SVGProps<SVGSVGElement> {
  const { size = 24, ...rest } = props
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    ...rest,
  }
}

export function Search(props: IconProps) {
  return (
    <svg {...lucide(props)}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

export function PanelLeft(props: IconProps) {
  return (
    <svg {...lucide(props)}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
    </svg>
  )
}

export function Sun(props: IconProps) {
  return (
    <svg {...lucide(props)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

export function Moon(props: IconProps) {
  return (
    <svg {...lucide(props)}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

export function ChevronDown(props: IconProps) {
  return (
    <svg {...lucide(props)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg {...lucide(props)}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

export function ChevronRight(props: IconProps) {
  return (
    <svg {...lucide(props)}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export function Copy(props: IconProps) {
  return (
    <svg {...lucide(props)}>
      <rect width="14" height="14" x="8" y="8" rx="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

export function Check(props: IconProps) {
  return (
    <svg {...lucide(props)}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function TextAlignStart(props: IconProps) {
  return (
    <svg {...lucide(props)}>
      <path d="M21 5H3" />
      <path d="M15 12H3" />
      <path d="M17 19H3" />
    </svg>
  )
}

export function ExternalLink(props: IconProps) {
  return (
    <svg {...lucide(props)}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
}

export function GitHubMark(props: IconProps) {
  const { size = 24, ...rest } = props
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...rest}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}
