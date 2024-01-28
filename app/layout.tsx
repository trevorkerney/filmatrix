import { ReactNode } from 'react'

import '~/styles/app.css'
import Header from '~/components/ui/Header'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'WKU Filmatrix',
  description:
    'WKU Filmatrix is a database for storing information pertinent to the WKU Film and Journalism department such as location data and their corresponding contracts, vendor data, student and cast, data and much more.'
}

type RootProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body className="app-body">
        <Toaster 
          toastOptions={
            {className: "app-toaster"}
          }
        />   
        <Header />
        <main className="app-content">
          {children}
        </main>
        <footer className="app-footer">

        </footer>  
      </body>
    </html>
  )
}
