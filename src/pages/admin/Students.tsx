import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Text, Heading } from '@chakra-ui/react';
interface Student {
    _id: string;
    studentNameA: string;
    studentNameE: string;
    dob: string; // You might want to use `Date` if you plan to handle dates more effectively
    gender: string;
    originCountry: string;
    mainLang: string;
    schoolName: string;
    grade: string;
    motherNm: string;
    motherPhoneNo?: string;
    motherWANm: string;
    fatherNm?: string;
    fatherPhoneNo?: string;
    fatherWANm?: string;
    address: string;
    postalCode: string;
    email: string;
    emergencyContact?: string;
    prevKayanStd: string;
    prevArabicSchoolStd: string;
    knowUs: string;
    acceptTerms: boolean;
}


const StudentsList: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get<Student[]>('/api/v1/students');
                setStudents(response.data);
            } catch (error) {
                console.error("There was an error fetching the students!", error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <Box p={4}>
            <Heading as="h2" size="lg" mb={4}>Students List</Heading>
            {students.length === 0 ? (
                <Text>No students found.</Text>
            ) : (
                students.map(student => (
                    <Box key={student._id} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
                        <Text><strong>Name (Arabic):</strong> {student.studentNameA}</Text>
                        <Text><strong>Name (English):</strong> {student.studentNameE}</Text>
                        <Text><strong>Date of Birth:</strong> {new Date(student.dob).toLocaleDateString()}</Text>
                        <Text><strong>Gender:</strong> {student.gender}</Text>
                        <Text><strong>Origin Country:</strong> {student.originCountry}</Text>
                        <Text><strong>Main Language:</strong> {student.mainLang}</Text>
                        <Text><strong>School Name:</strong> {student.schoolName}</Text>
                        <Text><strong>Grade:</strong> {student.grade}</Text>
                        <Text><strong>Mother's Name:</strong> {student.motherNm}</Text>
                        <Text><strong>Address:</strong> {student.address}</Text>
                        <Text><strong>Email:</strong> {student.email}</Text>
                        {/* Add other fields as needed */}
                    </Box>
                ))
            )}
        </Box>
    );
};

export default StudentsList;
