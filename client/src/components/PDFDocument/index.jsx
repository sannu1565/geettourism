import React from 'react';
import { Document, Page, Image, Text, View, StyleSheet } from '@react-pdf/renderer';
import 'tailwindcss/tailwind.css';

const styles = StyleSheet.create({
  page: {
    margin : "20px",
    padding: '20px',
    fontSize: '12px',
    border: '1px solid orange',
  },
  headerImage: {
    width: '100%',
    height: '100px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    backgroundColor:  "orange "
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap : '5px',
  },
  leftColumn: {
    width: '40%',
    padding: '10px',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
  },
  rightColumn: {
    width: '50%',
    padding: '10px',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
  },
  text: {
    marginBottom: '10px',
    fontSize: '16px',
    
  },
  greeting: {
    marginTop: '20px',
    textAlign: 'center',
    
  },
});

const PDFDocument = ({ data }) => (
  <Document>
    <Page  className = "gap-7" style={styles.page}>
      <Image style={styles.headerImage} src="/images/geettour.png" />
      <Text className ="bg-orange-700  font-manrope  font-semibold " style={styles.header}>BOOKING RECEIPT </Text>
      <View style={styles.section}>
        <View style={styles.leftColumn}>
          <Image className="w-full h-auto mb-4" src={data.productImage} alt="" />
          <Text  className ="gap-4 font-semibold  
                   border-solid text-gray-900 font-manrope" style={styles.text}>{data.productName}</Text>
          <Text className ="gap-4 font-semibold  
                   border-solid text-gray-900 font-manrope " style={styles.text}>Amount: {data.amount}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text  className ="gap-4 font-semibold  
                   border-solid"style={styles.text}>Name: {data.name}</Text>
          <Text className ="gap-4 font-semibold  
                   border-solid" style={styles.text}>Email: {data.email}</Text>
          <Text  className ="gap-4 font-semibold  
                   border-solid" style={styles.text}>Mobile: {data.mobile}</Text>
          <Text className ="gap-4 font-semibold  
                   border-solid"  style={styles.text}>Payment ID: {data.razorpayPaymentId}</Text>
          <Text  className ="gap-4 font-semibold  
                   border-solid" style={styles.text}>Order ID: {data.razorpayOrderId}</Text>
          <Text className ="gap-4 font-semibold  
                   border-solid" style={styles.text}>Booking Date: {data.dateOfBooking}</Text>
        </View>
      </View>
      <Text style={styles.greeting}>Thanks for booking this tour. We will reach out to you soon.</Text>
    </Page>
  </Document>
);




export default PDFDocument;
