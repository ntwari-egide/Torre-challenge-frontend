import { Table, Space,Typography } from 'antd';
import { Image } from 'antd';

const { Text } = Typography;

const columns = [
  {
    title: 'STUDENTS',
    dataIndex: 'student',
    key: 'student',
    render: text => <Space  direction="horizontal">
        <Text className="id">{1}</Text>
        <Space direction="vertical">
            <Text className="full-name">Kamikazi Lilian</Text>
            <Text className="email">kamikaziLili@gmail.com</Text>
        </Space>
    </Space> ,
  },
  {
    title: 'COMPANIES',
    dataIndex: 'companies',
    key: 'companies',
    render: text => <Space direction="horizontal">
        <Image className="table-pic-img"
            width={200}
            src={ `https://logodix.com/logo/1860908.jpg`}
            />
        <Text className="company">MTN Rwanda</Text>
    </Space>
  },
  {
    title: 'DATE JOINED',
    dataIndex: 'date_joined',
    key: 'date_joined',
    render: text => <Text className="date-joined">1st JUNE 2021</Text>
  },
  {
    title: 'SERVICE FEE',
    key: 'service_fee',
    dataIndex: 'service_fee',
    render: text => <a className="rate-button-table">PAID</a>
    // render: 
  },
];

const data = [
  {
    key: '1',
    students: 'Kamikazi Lilian',
    companies: '',
    date_joined: 'New York No. 1 Lake Park',
    service_fee: 'PAID',
  },
  {
    key: '2',
    students: 'Kamikazi Lilian',
    companies: '',
    date_joined: 'New York No. 1 Lake Park',
    service_fee: 'PAID',
  },
  {
    key: '3',
    students: 'Kamikazi Lilian',
    companies: '',
    date_joined: 'New York No. 1 Lake Park',
    service_fee: 'PAID',
  },
  {
    key: '4',
    students: 'Kamikazi Lilian',
    companies: '',
    date_joined: 'New York No. 1 Lake Park',
    service_fee: 'PAID',
  },
  {
    key: '5',
    students: 'Kamikazi Lilian',
    companies: '',
    date_joined: 'New York No. 1 Lake Park',
    service_fee: 'PAID',
  },
  {
    key: '6',
    students: 'Kamikazi Lilian',
    companies: '',
    date_joined: 'New York No. 1 Lake Park',
    service_fee: 'PAID',
  },
  {
    key: '7',
    students: 'Kamikazi Lilian',
    companies: '',
    date_joined: 'New York No. 1 Lake Park',
    service_fee: 'PAID',
  }
  
];

const StudentTableComponent = () => {
    return <Table className="students-table" columns={columns} dataSource={data} />
}

export default StudentTableComponent