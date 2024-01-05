'use client'

import { AiOutlineCheckCircle } from "react-icons/ai"
import MainLayout from "../layouts/MainLayout"
import Link from "next/link"

export default function Success() {
  return (
    <>
        <MainLayout>
            <div id="SuccessPage" className="mt-12 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
                <div className="bg-white w-full p-6 min-h-[150px] flex items-center justify-center">
                    <div>
                        <div className="flex items-center text-xl">
                            <AiOutlineCheckCircle className="text-orange-500" size={35}/>
                            <span className="pl-4">Pago Sastifactorio</span>
                        </div>
                        <p className="text-sm">Gracias! Hemos recibido tu pago.</p>

                        <Link href="/" className="w-full">
                            <div className="w-full text-center bg-orange-600 text-sm font-semibold text-white p-[11px] mt-4">
                                Back to shop
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    </>
  )
}
