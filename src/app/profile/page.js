"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import Link from "next/link";
import { CircularProgress, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { blue } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import InsightsIcon from '@mui/icons-material/Insights';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

// data for Scatter chart
const data = [
    {
        id: 'data-0',
        x1: 329.39,
        x2: 391.29,
        y1: 443.28,
        y2: 153.9,
    },
    {
        id: 'data-1',
        x1: 96.94,
        x2: 139.6,
        y1: 110.5,
        y2: 217.8,
    },
    {
        id: 'data-2',
        x1: 336.35,
        x2: 282.34,
        y1: 175.23,
        y2: 286.32,
    },
    {
        id: 'data-3',
        x1: 159.44,
        x2: 384.85,
        y1: 195.97,
        y2: 325.12,
    },
    {
        id: 'data-4',
        x1: 188.86,
        x2: 182.27,
        y1: 351.77,
        y2: 144.58,
    },
    {
        id: 'data-5',
        x1: 143.86,
        x2: 360.22,
        y1: 43.253,
        y2: 146.51,
    },
    {
        id: 'data-6',
        x1: 202.02,
        x2: 209.5,
        y1: 376.34,
        y2: 309.69,
    },
    {
        id: 'data-7',
        x1: 384.41,
        x2: 258.93,
        y1: 31.514,
        y2: 236.38,
    },
    {
        id: 'data-8',
        x1: 256.76,
        x2: 70.571,
        y1: 231.31,
        y2: 440.72,
    },
    {
        id: 'data-9',
        x1: 143.79,
        x2: 419.02,
        y1: 108.04,
        y2: 20.29,
    },
    {
        id: 'data-10',
        x1: 103.48,
        x2: 15.886,
        y1: 321.77,
        y2: 484.17,
    },
    {
        id: 'data-11',
        x1: 272.39,
        x2: 189.03,
        y1: 120.18,
        y2: 54.962,
    },
    {
        id: 'data-12',
        x1: 23.57,
        x2: 456.4,
        y1: 366.2,
        y2: 418.5,
    },
    {
        id: 'data-13',
        x1: 219.73,
        x2: 235.96,
        y1: 451.45,
        y2: 181.32,
    },
    {
        id: 'data-14',
        x1: 54.99,
        x2: 434.5,
        y1: 294.8,
        y2: 440.9,
    },
    {
        id: 'data-15',
        x1: 134.13,
        x2: 383.8,
        y1: 121.83,
        y2: 273.52,
    },
    {
        id: 'data-16',
        x1: 12.7,
        x2: 270.8,
        y1: 287.7,
        y2: 346.7,
    },
    {
        id: 'data-17',
        x1: 176.51,
        x2: 119.17,
        y1: 134.06,
        y2: 74.528,
    },
    {
        id: 'data-18',
        x1: 65.05,
        x2: 78.93,
        y1: 104.5,
        y2: 150.9,
    },
    {
        id: 'data-19',
        x1: 162.25,
        x2: 63.707,
        y1: 413.07,
        y2: 26.483,
    },
    {
        id: 'data-20',
        x1: 68.88,
        x2: 150.8,
        y1: 74.68,
        y2: 333.2,
    },
    {
        id: 'data-21',
        x1: 95.29,
        x2: 329.1,
        y1: 360.6,
        y2: 422.0,
    },
    {
        id: 'data-22',
        x1: 390.62,
        x2: 10.01,
        y1: 330.72,
        y2: 488.06,
    },
];

export default function Profile() {
    return (
        <div className='flex w-full h-[93vh]'>

            {/* sidebar */}
            <div className="flex flex-col py-6 px-3 bg-blue-100">
                <div className="flex flex-col items-center gap-[20px]">
                    <AccountCircleIcon sx={{ fontSize: 52 }} />
                    <HomeIcon sx={{ fontSize: 36 }} />
                    <InsightsIcon sx={{ fontSize: 36 }} />
                    <SettingsIcon sx={{ fontSize: 36 }} />
                </div>
                <div className="mt-auto">
                    <Link href={"/"}><IconButton ><LogoutIcon sx={{ fontSize: 40, color: blue[900] }} /></IconButton></Link>
                </div>
            </div>

            {/* charts */}
            <div className='w-full flex flex-col gap-[24px] p-8'>

                <div className="gap-[24px] bg-blue-50 rounded-[32px] h-[19rem] flex-1 items-center p-8">
                    <div className='font-bold text-[24px]'>Loren Ipsum</div>
                    <div className=''>Nam auctor quam ornare tristique auctor.</div>
                    <Stack direction="row" >
                        <Box sx={{ flexGrow: 1 }}>
                            <SparkLineChart
                                data={[1, 4, 2, 5, 7, 2, 4, 6]}
                                xAxis={{
                                    scaleType: 'time',
                                    data: [
                                        new Date(2022, 5, 1),
                                        new Date(2022, 5, 2),
                                        new Date(2022, 5, 5),
                                        new Date(2022, 5, 6),
                                        new Date(2022, 5, 7),
                                        new Date(2022, 5, 8),
                                        new Date(2022, 5, 11),
                                        new Date(2022, 5, 12),
                                    ],
                                    valueFormatter: (value) => value.toISOString().slice(0, 10),
                                }}
                                height={100}
                                showTooltip
                                showHighlight
                            />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <SparkLineChart
                                plotType="bar"
                                data={[1, 4, 2, 5, 7, 2, 4, 6]}
                                height={100}
                                showTooltip
                                showHighlight
                                xAxis={{
                                    scaleType: 'band',
                                    data: [
                                        new Date(2016, 0, 1),
                                        new Date(2017, 0, 1),
                                        new Date(2018, 0, 1),
                                        new Date(2019, 0, 1),
                                        new Date(2020, 0, 1),
                                        new Date(2021, 0, 1),
                                        new Date(2022, 0, 1),
                                        new Date(2023, 0, 1),
                                    ],
                                    valueFormatter: (value) => value.getFullYear(),
                                }}
                            />
                        </Box>
                    </Stack>
                    <div className=''></div>
                    <div className='flex mt-[1rem] gap-[24px]'>
                        <div className='flex-1 border-t-[1px] border-zinc-500 pt-[0.5rem]'>Nam auctor quam ornare tristique auctor. Nam auctor quam ornare tristique auctor. </div>
                        <div className='flex-1 border-t-[1px] border-zinc-500 pt-[0.5rem]'>Maecenas dictum, risus non cursus viverra, nibh tortor sagittis ex, at varius ligula dui et quam.</div>
                    </div>
                </div>

                <div className='flex gap-[24px]'>
                    <div className="gap-[24px] bg-blue-50 rounded-[32px] h-[18rem] flex-1">
                        <BarChart
                            series={[
                                { data: [35, 44, 24, 34] },
                                { data: [51, 6, 49, 30] },
                                { data: [15, 25, 30, 50] },
                                { data: [60, 50, 15, 25] },
                            ]}
                            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                            padding={{ bottom: 10, left: 20, right: 10 }}
                        />
                    </div>
                    <div className="gap-[24px] bg-blue-50 py-8 pr-2 rounded-[32px] h-[18rem] w-[30%] min-w-[400px]">
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                },
                            ]}
                        />
                    </div>
                </div>

                <div className='flex gap-[24px]'>
                    <div className="gap-[24px] bg-blue-50 rounded-[32px] h-[16rem] flex-1">
                        <ScatterChart
                            series={[
                                {
                                    label: 'Series A',
                                    data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
                                },
                                {
                                    label: 'Series B',
                                    data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}