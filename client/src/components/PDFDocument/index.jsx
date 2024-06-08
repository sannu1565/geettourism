import React from 'react';
import { Document, Page, Image, Text, View, StyleSheet } from '@react-pdf/renderer';
import 'tailwindcss/tailwind.css';

const styles = StyleSheet.create({
  page: {
    padding: '20px',
    fontSize: '12px',
    border: '5px solid #e2e8f0',
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
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftColumn: {
    width: '55%',
    padding: '10px',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
  },
  rightColumn: {
    width: '45%',
    padding: '10px',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
  },
  text: {
    marginBottom: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  greeting: {
    marginTop: '20px',
    textAlign: 'center',
  },
});

const PDFDocument = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      <Image style={styles.headerImage} src="/images/geettour.png" />
      <Text style={styles.header}>Booking Details</Text>
      <View style={styles.section}>
        <View style={styles.leftColumn}>
          <Image className="w-full h-auto mb-4" src={data.productImage} alt="" />
          <Text style={styles.text}>Spot: {data.productName}</Text>
          <Text style={styles.text}>Amount: {data.amount}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.text}>Name: {data.name}</Text>
          <Text style={styles.text}>Email: {data.email}</Text>
          <Text style={styles.text}>Mobile: {data.mobile}</Text>
          <Text style={styles.text}>Payment ID: {data.razorpayPaymentId}</Text>
          <Text style={styles.text}>Order ID: {data.razorpayOrderId}</Text>
          <Text style={styles.text}>Booking Date: {data.dateOfBooking}</Text>
        </View>
      </View>
      <Text style={styles.greeting}>Thanks for booking this tour. We will reach out to you soon.</Text>
    </Page>
  </Document>
);




export default PDFDocument;
