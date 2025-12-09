export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
   // footer
    <div className='ftr'>
      <p className='footer'>Copyright ⓒ {year}</p>
    </div>
  )
}
