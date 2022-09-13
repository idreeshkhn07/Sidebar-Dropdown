import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'


export const SidebarData = [
    {
        title: 'All Music',
        path: '/allsongs',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Search for all songs',
                path: '/allsongs/searchedSongs',
                icon: <IoIcons.IoIosPaper />,
            }
        ]
    },
    {
        title: 'All Singer',
        path: '/allsingers',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Search Singer Music',
                path: '/allsingers/singerMusic',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Recommendation ',
        path: '/recommend',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Time of Day',
                path: '/recommend/songAcctime',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Continent Specific',
                path: '/recommend/songsacclocation',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
        
    },
    {
        title: 'All Genres',
        path: `/allgenres`,
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'According to location',
                path: '/allgenres/setMusicGenre',
                icon: <IoIcons.IoIosPaper />,
            },
           
        ]
        
    },
    {
        title: 'Most Liked',
        path: `/mostLikedmusics`,
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'According to location',
                path: '/mostLikedmusics/Select mood',
                icon: <IoIcons.IoIosPaper />,
            },
           
        ]
        
    },
    {
        title: 'Top Picked',
        path: `/mostPlayedmusics`,
        icon: <AiIcons.AiFillHome />,
        
    },
    {
        title: ' recently added song',
        path: `/RecentMusics`,
        icon: <AiIcons.AiFillHome />,
        
    },
    {
        title: 'Never Played',
        path: `/notPlayedSongs`,
        icon: <AiIcons.AiFillHome />,
        
    },

]
