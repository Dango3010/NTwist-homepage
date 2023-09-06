
//a direct link with a name
export default function DirectLink({text, className, link}) {

  return (
    <a className={className} href={link}>
      <span>{text}</span>
    </a>
  )
}

