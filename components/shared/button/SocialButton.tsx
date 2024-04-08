import React from 'react'
import Image from 'next/image'

const SocialButton = ({
  icon,
  onClick,
  children,
}: {
  icon: string
  onClick: () => void
  children: React.ReactNode
}) => {
  return (
    <button
      className="`
      social-button
        py-[0.625rem]
        px-5
        border
        border-solid
        border-[var(--border)]
        outline-none
        select-none
        cursor-pointer
        color-[var(--accent)]
        rounded-lg
        text-sm
        leading-none
        inline-flex
        items-center
        min-h-9
        tracking-wider
        w-full
        gap-4
        relative
        justify-start
        text-ellipsis
        overflow-hidden
        group
        hover:bg-[var(--accentLightest)]
      `"
      onClick={onClick}
    >
      <span className="flex flex-row items-center flex-nowrap justify-center flex-grow-0 flex-shrink-0 basis-5">
        <Image src={icon} alt="Google Icon" width={20} height={20} />
      </span>
      <div className="flex flex-row items-center flex-nowrap justify-start gap-2 w-full overflow-hidden">
        <span className="text-[0.8125rem] leading-5 text-ellipsis whitespace-nowrap overflow-hidden">
          {children}
        </span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 20 20"
        className="flex-shrink-0 min-w-4 min-h-4 w-[1em] h-[1em] opacity-0 -translate-x-2 transition-all group-focus:opacity-50 group-focus:translate-x-0 group-hover:opacity-50 group-hover:translate-x-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.3 10h13.4m-5-5 5 5-5 5"
        ></path>
      </svg>
    </button>
  )
}

export default SocialButton
