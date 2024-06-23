import { Skeleton, Stack, Table } from "@mantine/core";
import _ from "lodash";

export function JsonTable({ data }: { data: any }) {
    if (!data) return <LoadingTable row={1} col={5} />
    return (
        <Stack style={{
            overflowX: 'auto',
        }}>
            <Table stickyHeader striped border={1} highlightOnHover>
                <Table.Thead>
                    <Table.Tr className={"gray-dark"} c="white">
                        {_.keys(data[0]).map((key, index) => (
                            <Table.Th key={index}>{key}</Table.Th>
                        ))}
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {data.map((item: any, index: number) => (
                        <Table.Tr key={index}>
                            {_.keys(item).map((key, index) => (
                                <Table.Td miw={50} maw={300} style={{
                                    textWrap: 'pretty',
                                    wordBreak: 'break-all'
                                }} key={index}>{typeof item[key] === 'object' ? JSON.stringify(item[key]) : typeof item[key] === 'boolean' ? item[key]?.toString() : item[key]}</Table.Td>
                            ))}
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </Stack>
    )
}


function LoadingTable({ row, col }: { row: number, col: number }) {

    const listData: any[] = Array.from({ length: col }).map(() => (
        Array.from({ length: row }).reduce((acc: any, _, index) => {
            acc[index] = index;
            return acc;
        }, {})
    ));

    return (
        <Stack>

            <Table>
                <Table.Thead>
                    <Table.Tr>
                        {_.keys(listData[0]).map((key, index) => (
                            <Table.Th key={index}><Skeleton h={40} /></Table.Th>
                        ))}
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {listData.map((item: any, index: number) => (
                        <Table.Tr key={index}>
                            {_.keys(item).map((key, index) => (
                                <Table.Td key={index}><Skeleton h={20} /></Table.Td>
                            ))}
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </Stack>
    )
}