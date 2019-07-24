export function checkIfBingo(data) {
    console.log(data);
    for (let i = 0; i < 5; i++)
        if (data[i * 5][1])
            if (data[i * 5 + 1][1])
                if (data[i * 5 + 2][1])
                    if (data[i * 5 + 3][1])
                        if (data[i * 5 + 4][1])
                            return true;
    for (let i = 0; i < 5; i++)
        if (data[i][1])
            if (data[i + 5][1])
                if (data[i + 10][1])
                    if (data[i + 15][1])
                        if (data[i + 20][1])
                            return true;
    if (data[0][1])
        if (data[6][1])
            if (data[12][1])
                if (data[18][1])
                    if (data[24][1])
                        return true;
    if (data[4][1])
        if (data[8][1])
            if (data[12][1])
                if (data[16][1])
                    if (data[20][1])
                        return true;

}
