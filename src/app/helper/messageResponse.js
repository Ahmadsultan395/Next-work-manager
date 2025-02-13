import { NextResponse } from "next/server";

const messageResponse = (message,statusCode  , successCode) => {
  return(
    NextResponse.json({
      success:successCode,
       message:message,
      }, {
        status: statusCode,
      })
  )
};  
export default messageResponse;