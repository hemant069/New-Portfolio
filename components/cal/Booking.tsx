import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { getCalApi } from "@calcom/embed-react";

const Booking = () => {

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return (
        <div className=' mt-4 p-[2rem] ring-1 ring-gray-200 dark:ring-gray-800 inset-shadow-sm inset-shadow-gray-200 dark:border-gray-800 rounded-lg  '>
            <p className='text-center text-xl font-bold mb-4'>So you want to work with me ?</p>
            <div className='flex items-center justify-center '>
                <Button
                    data-cal-namespace="30min"
                    data-cal-link="hemant-prajapati-dogwqr/30min"

                    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
                    className='bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'>Book a Call</Button>
            </div>
        </div>
    )
}

export default Booking