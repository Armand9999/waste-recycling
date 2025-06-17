import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Log the payment notification (in production, you'd save to database)
    console.log('CinetPay callback received:', data);
    
    // Verify the transaction with CinetPay (in production)
    // This would involve making an API call to CinetPay to verify the transaction
    // using your API keys and the transaction ID
    
    // Example verification logic (pseudocode):
    // const isValid = await verifyCinetPayTransaction(data.cpm_trans_id);
    // if (!isValid) {
    //   return NextResponse.json({ error: 'Invalid transaction' }, { status: 400 });
    // }
    
    // Process the payment based on the status
    if (data.cpm_result === '00') {
      // Payment successful
      // Update your database, send confirmation email, etc.
      
      return NextResponse.json({ 
        success: true, 
        message: 'Payment processed successfully' 
      });
    } else {
      // Payment failed
      // Log the failure reason
      console.error('Payment failed:', data.cpm_error_message);
      
      return NextResponse.json({ 
        success: false, 
        message: 'Payment failed', 
        error: data.cpm_error_message 
      });
    }
  } catch (error) {
    console.error('Error processing payment callback:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Error processing payment callback' 
    }, { status: 500 });
  }
}

// Optional: Handle GET requests for testing
export async function GET() {
  return NextResponse.json({ 
    message: 'CinetPay callback endpoint is working' 
  });
}