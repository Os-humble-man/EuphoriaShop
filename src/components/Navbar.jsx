import React from 'react'

export default function Navbar() {
    return (
        <div className='max-w-6xl mx-auto '>
            <div className='flex justify-between items-center py-5'>
                {/* logo */}
                <div>
                    <div>
                        <svg width="93" height="36" viewBox="0 0 93 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.8923 21.3907C4.15842 21.3408 4.45781 21.3076 4.79046 21.3076C4.84036 19.5611 5.83831 16.6671 6.9028 13.6732C5.90484 13.5235 5.05658 13.5235 4.54097 13.8728C4.17505 12.4257 5.55556 12.143 7.45168 12.1763C8.433 9.39861 9.38106 6.6875 9.58065 4.87455C8.00055 4.77475 6.60341 4.94108 5.72189 5.93903C5.43913 6.23842 4.67403 2.46282 8.13361 1.83078C10.9445 1.31517 16.9323 3.61047 18.8117 0.965883C19.0945 0.583333 19.3274 4.04291 17.4479 4.97434C16.2503 5.55648 14.6702 5.48995 13.0236 5.29036C12.7907 6.88709 11.9258 9.53168 11.0277 12.4091C12.9903 12.5422 14.7201 12.5255 15.086 11.5941C15.6682 15.0703 13.1899 14.9539 10.4289 14.3884C9.66381 16.9498 8.94861 19.5445 8.68249 21.6568C11.0942 21.9396 13.5059 22.0394 14.5704 20.5258C14.8532 20.1433 15.086 23.6029 13.2066 24.5177C9.9133 26.1476 3.8424 22.8211 1.48057 25.4823C1.19782 25.7817 0.432716 22.0061 3.8923 21.3907ZM17.9136 11.1617C17.897 11.0951 21.5894 10.7625 21.5229 12.8915C21.473 14.2553 18.2795 21.241 18.9448 23.4864C20.5748 21.4074 24.9159 11.1617 24.9159 11.1617C24.8993 11.0951 28.5917 10.7625 28.5086 12.8915C28.4587 14.272 25.6644 19.8439 25.9471 23.5862C27.2278 22.239 28.7747 18.5299 29.0574 17.8313C29.0907 17.7648 29.1572 17.7316 29.2238 17.7316C29.3568 17.7316 29.44 17.848 29.4067 17.9644C29.0075 19.1952 27.3443 24.2682 26.4794 24.7838C25.4814 25.3992 22.7703 24.368 22.5208 23.2369C22.0385 21.1412 24.0677 16.1515 24.7496 13.141C23.419 16.6172 20.3419 24.4179 19.2775 24.8836C18.2961 25.2994 15.6349 24.4511 15.4187 23.1205C15.0195 20.7088 18.4292 13.0911 17.9136 11.1617ZM25.3151 32.9171C24.6332 28.7257 30.9868 14.6213 30.3215 11.1284C30.3049 11.0619 34.147 11.1284 33.9142 13.2407C33.6979 15.2533 30.8371 23.187 29.4899 29.0916C31.9016 20.1433 36.5421 11.6773 37.2573 11.2615C37.906 10.8789 39.9019 11.4444 40.7169 12.8748C41.8146 14.8042 39.4861 24.1185 35.6273 24.9002C34.7624 25.0832 32.7166 23.8025 32.3008 23.2868C30.8704 26.9626 29.5398 31.0709 28.9077 34.8631C28.8246 35.2623 25.5978 34.6469 25.3151 32.9171ZM37.6066 12.3093C37.3904 12.2262 34.8289 16.8667 32.4837 22.8045C35.5608 24.5343 38.3883 12.6253 37.6066 12.3093ZM40.3842 22.9875C39.7023 18.7794 46.1391 4.19261 45.7067 1.08231C45.69 1.01578 49.2162 1.19874 48.9833 3.31108C48.7504 5.48995 45.374 14.6712 44.243 20.6589C45.8564 16.6671 48.6673 10.9621 50.2806 11.1118C51.2121 11.1949 53.0915 12.0765 53.2579 12.642C53.7236 14.2054 50.4636 21.3408 50.3971 23.7027C51.6944 22.4552 53.3244 18.5465 53.6072 17.8313C53.6404 17.7648 53.707 17.7316 53.7735 17.7316C53.9065 17.7316 53.9897 17.848 53.9564 17.9644C53.5573 19.1952 51.7277 24.8337 50.9958 24.9335C49.5488 25.1331 47.1038 24.0852 46.9042 22.7712C46.6547 20.9915 49.4989 15.22 49.7817 12.4257C48.95 12.2927 43.9436 22.3055 43.9769 24.8836C44.0767 25.3493 40.6836 24.7505 40.3842 22.9875ZM53.4076 22.7546C52.4262 19.977 54.655 13.0245 57.1665 11.4112C58.0314 10.8457 60.3766 10.9953 61.1251 11.4943C61.7738 11.9101 61.358 12.3093 61.358 12.3093C58.6468 11.0452 55.4534 22.8211 56.7008 23.9688C58.1479 25.2994 61.5908 14.405 59.5117 13.9726C59.5117 13.9726 60.4764 12.6087 61.3081 12.7085C64.1855 13.0911 62.0066 22.871 57.9815 24.7671C56.8838 25.2828 54.2725 25.183 53.4076 22.7546ZM62.1231 23.1538C61.6906 20.5092 64.9672 13.0578 64.435 11.1284C64.4184 11.0619 68.3104 10.7625 68.2439 12.8915C68.194 14.089 66.0816 18.4468 65.7157 22.0228C66.9798 18.0975 69.8739 10.9454 71.6702 11.1118C72.6016 11.1949 74.2316 11.96 74.3979 12.5089C74.6141 13.2407 72.3854 16.7336 72.9841 18.8958C68.0276 18.6796 71.2377 13.0744 71.1712 12.4257C70.3396 12.2927 65.882 22.2057 65.8987 24.8004C65.9153 24.9002 65.7989 24.9667 65.7157 24.9501C65.0005 24.8669 62.3393 24.4844 62.1231 23.1538ZM79.3544 10.8623C74.5975 10.2302 77.6246 7.5524 77.4251 5.78934C82.5812 6.62097 78.9386 8.40066 79.3544 10.8623ZM72.9675 23.1538C72.5018 20.609 75.9281 13.0578 75.4125 11.1284C75.3959 11.0619 79.2546 10.7625 79.1881 12.8915C79.1382 14.272 76.3772 19.7607 76.6101 23.5031C77.8741 22.0893 79.3711 18.5133 79.6538 17.8313C79.6705 17.7648 79.737 17.7316 79.8201 17.7316C79.9366 17.7316 80.0197 17.848 79.9865 17.9644C79.6039 19.1952 77.791 24.5177 76.9926 24.9002C76.1776 25.2661 73.1837 24.4012 72.9675 23.1538ZM82.9138 24.8836C82.315 25.2994 79.6206 24.5676 79.0052 23.4532C78.2068 22.0228 80.2027 14.7709 82.0323 12.4257C83.4627 10.6128 86.5564 11.0619 87.2882 11.4943C87.4712 11.5941 87.5377 11.6939 87.4379 11.9767C87.3215 12.2927 87.0886 12.2262 86.7227 12.1264C84.8598 11.644 82.0656 21.8564 82.2485 23.9355L88.1864 11.2947C88.3859 10.7459 91.9121 11.6606 91.5794 12.3592C91.2468 13.0578 88.8184 21.3408 88.7519 23.7027C90.0492 22.4552 91.6958 18.5465 91.9786 17.8313C92.0119 17.7648 92.0784 17.7316 92.1449 17.7316C92.2613 17.7316 92.3611 17.848 92.3112 17.9644C91.9287 19.1952 90.0991 24.8337 89.3673 24.9335C87.9036 25.1331 85.4586 24.0852 85.2756 22.7712C85.1093 21.6568 86.0241 18.2139 86.8724 15.3864C85.4087 19.1786 83.2465 24.6507 82.9138 24.8836Z" fill="#3C4242" />
                        </svg>

                    </div>
                </div>
                {/* menu items */}
                <div>
                    <ul className='flex items-center space-x-8 text-gray-400 text-[18px]'>
                        <li className='font-bold text-gray-800'>Shop</li>
                        <li>Men</li>
                        <li>Woman</li>
                        <li>Combos</li>
                        <li>Joggers</li>
                    </ul>
                </div>
                {/* search bar */}

                <form className="group relative">
                    <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                    <input className="bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10  shadow-sm" type="text" aria-label="Filter projects" placeholder="Search..." />
                </form>

                {/* icons */}
                <div className='flex items-center space-x-3'>
                    <div className='bg-gray-100 p-2 rounded-md'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.99486 4.93014C8.49535 3.18262 5.99481 2.71255 4.11602 4.31275C2.23723 5.91295 1.97273 8.5884 3.44815 10.481C4.67486 12.0545 8.38733 15.3732 9.60407 16.4474C9.7402 16.5675 9.80827 16.6276 9.88766 16.6512C9.95695 16.6718 10.0328 16.6718 10.1021 16.6512C10.1815 16.6276 10.2495 16.5675 10.3857 16.4474C11.6024 15.3732 15.3149 12.0545 16.5416 10.481C18.017 8.5884 17.7848 5.89611 15.8737 4.31275C13.9626 2.72938 11.4944 3.18262 9.99486 4.93014Z" stroke="#807D7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>

                    <div className='bg-gray-100 p-2 rounded-md'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99992 11.6667C12.3011 11.6667 14.1666 9.8012 14.1666 7.50001C14.1666 5.19882 12.3011 3.33334 9.99992 3.33334C7.69873 3.33334 5.83325 5.19882 5.83325 7.50001C5.83325 9.8012 7.69873 11.6667 9.99992 11.6667ZM9.99992 11.6667C6.31802 11.6667 3.33325 13.9053 3.33325 16.6667M9.99992 11.6667C13.6818 11.6667 16.6666 13.9053 16.6666 16.6667" stroke="#807D7E" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>

                    </div>

                    <div className='bg-gray-100 p-2 rounded-md'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 3.33334H3.00526C3.85578 3.33334 4.56986 3.97376 4.6621 4.81926L5.3379 11.0141C5.43014 11.8596 6.14422 12.5 6.99474 12.5H14.205C14.9669 12.5 15.6317 11.9834 15.82 11.2452L16.9699 6.73593C17.2387 5.68213 16.4425 4.65742 15.355 4.65742H5.5M5.52063 15.5208H6.14563M5.52063 16.1458H6.14563M14.6873 15.5208H15.3123M14.6873 16.1458H15.3123M6.66667 15.8333C6.66667 16.2936 6.29357 16.6667 5.83333 16.6667C5.3731 16.6667 5 16.2936 5 15.8333C5 15.3731 5.3731 15 5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2936 15.4602 16.6667 15 16.6667C14.5398 16.6667 14.1667 16.2936 14.1667 15.8333C14.1667 15.3731 14.5398 15 15 15C15.4602 15 15.8333 15.3731 15.8333 15.8333Z" stroke="#807D7E" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}