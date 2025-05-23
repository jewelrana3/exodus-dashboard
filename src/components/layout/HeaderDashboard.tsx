import { Layout } from 'antd';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderDashboard = () => {
    return (
        <Header
            className=" mb-10"
            style={{
                height: 80,

                width: '100%',
                overflow: 'hidden',
            }}
        >
            <div className="flex items-center justify-end gap-5 h-full">
                <div>
                    {/*notification icons */}
                    <Link to={'/notification'}>
                        <div className="size-10 rounded-full flex items-center justify-center ">
                            <button className="py-4 px-1 relative border-2 border-transparent rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out">
                                <span className="absolute inset-0 -top-4  -mr-6">
                                    <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-primary text-white">
                                        6
                                    </div>
                                </span>

                                <IoMdNotificationsOutline size={24} />
                            </button>
                        </div>
                    </Link>
                </div>
                <div>
                    {/* profile */}

                    <Link
                        to={'/edit-profile'}
                        style={{
                            height: '42px',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            margin: '10px',
                        }}
                    >
                        <img
                            src={'/user.svg'}
                            style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                borderColor: '#00369A',
                                borderWidth: 2,
                            }}
                            alt=""
                        />
                        <h2
                            style={{
                                fontSize: '16px',
                                fontWeight: '600',
                            }}
                        >
                            John Doe
                        </h2>
                    </Link>
                </div>
            </div>
        </Header>
    );
};

export default HeaderDashboard;
