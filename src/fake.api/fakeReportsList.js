const reportsArray = [
    {
        id: 1,
        email: "test.com",
        testType: "test1",
        createDate: "01.01.2022",
        reportDate: "01.08.2022",
        info: "Information about report, all information and other and other and other and other and other and other and other and other  and other"
    },
    {
        id: 2,
        email: "test2.com",
        testType: "test2",
        createDate: "02.02.2022",
        reportDate: "02.09.2022",
        info: "1 Information about report, all information and other and other and other and other and other and other and other and other  and other"
    },
    {
        id: 3,
        email: "test2.com",
        testType: "test3",
        createDate: "02.02.2022",
        reportDate: "02.09.2022",
        info: "2 Information about report, all information and other and other and other and other and other and other and other and other  and other"
    },
    {
        id: 4,
        email: "test2.com",
        testType: "test4",
        createDate: "02.02.2022",
        reportDate: "02.09.2022",
        info: "3 Information about report, all information and other and other and other and other and other and other and other and other  and other"
    },
    {
        id: 5,
        email: "test2.com",
        testType: "test5",
        createDate: "02.02.2022",
        reportDate: "02.09.2022",
        info: "4 Information about report, all information and other and other and other and other and other and other and other and other  and other"
    },
    {
        id: 6,
        email: "test3.com",
        testType: "test1",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 7,
        email: "test3.com",
        testType: "test3",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 8,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 9,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 10,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 11,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 12,
        email: "test.com",
        testType: "test1",
        createDate: "01.01.2022",
        reportDate: "01.08.2022"
    },
    {
        id: 13,
        email: "test2.com",
        testType: "test2",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 14,
        email: "test2.com",
        testType: "test3",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 15,
        email: "test2.com",
        testType: "test4",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 16,
        email: "test2.com",
        testType: "test5",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 17,
        email: "test3.com",
        testType: "test1",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 18,
        email: "test3.com",
        testType: "test3",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 19,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 20,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 21,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 22,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 23,
        email: "test.com",
        testType: "test1",
        createDate: "01.01.2022",
        reportDate: "01.08.2022"
    },
    {
        id: 24,
        email: "test2.com",
        testType: "test2",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 25,
        email: "test2.com",
        testType: "test3",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 26,
        email: "test2.com",
        testType: "test4",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 27,
        email: "test2.com",
        testType: "test5",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 28,
        email: "test3.com",
        testType: "test1",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 29,
        email: "test3.com",
        testType: "test3",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 30,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 31,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 32,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 33,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 34,
        email: "test.com",
        testType: "test1",
        createDate: "01.01.2022",
        reportDate: "01.08.2022"
    },
    {
        id: 35,
        email: "test2.com",
        testType: "test2",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 36,
        email: "test2.com",
        testType: "test3",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 37,
        email: "test2.com",
        testType: "test4",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 38,
        email: "test2.com",
        testType: "test5",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 39,
        email: "test3.com",
        testType: "test1",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 40,
        email: "test3.com",
        testType: "test3",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 41,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 42,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 43,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 44,
        email: "test3.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },

    {
        id: 45,
        email: "test4.com",
        testType: "test3",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 46,
        email: "test4.com",
        testType: "test4",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 47,
        email: "test4.com",
        testType: "test5",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 48,
        email: "test4.com",
        testType: "test1",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 49,
        email: "test4.com",
        testType: "test3",
        createDate: "02.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 50,
        email: "test4.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 51,
        email: "test4.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 52,
        email: "test4.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    },
    {
        id: 53,
        email: "test4.com",
        testType: "test3",
        createDate: "01.02.2022",
        reportDate: "02.09.2022"
    }
];

const fetchALL = () => {
    return reportsArray;
};

export default fetchALL();
