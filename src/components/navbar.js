
import React, {useState, useEffect} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

export default () => {
    const tripName = 'Trip Name';

    const [myInfo, setMyInfo] = useState(null);  

    useEffect(() => {
        const getData = async () => {
            try {
                const { 
                    data: {
                        data: info
                    } 
                } = await axios.get('http://localhost:3001/my/info');

                setMyInfo(info);
            } catch (err) {
                console.error(err);
            }
        }
        getData();
    }, []);

    const fireAlert = async () => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
    }

    const infoSection = myInfo?.name
        ? (
            <li>
                { myInfo.name }
            </li>
        )
        : (
            <button onClick={ fireAlert }>
                Login
            </button>
        );
        
    return (
        <>
            <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="./index2" class="flex items-center">
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Tripllo</span>
                    </a>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                { tripName }
                            </li>
                            { infoSection }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}