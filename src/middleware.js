import { NextResponse } from 'next/server'
import  { NextRequest } from 'next/server'
 

export function middleware(request) {
  const authToken = request.cookies.get('authToken')?.value;

  if (request.nextUrl.pathname === '/api/login' || request.nextUrl.pathname === '/api/users' || request.nextUrl.pathname === '/') {
    return;
  }

  const loggedInUserNotAccessPath = request.nextUrl.pathname === '/auth/login' ||
  request.nextUrl.pathname === '/auth/signUp';

  if ( loggedInUserNotAccessPath) {
    if (authToken) {
      return NextResponse.redirect(new URL('/profile/users', request.url))
    }
  }
  else { if(!authToken) {

    if (request.nextUrl.pathname.startsWith('/api')) {
      return NextResponse.status(401).json({ message: 'Unauthorized' })
    }

    return NextResponse.redirect(new URL('/auth/login', request.url))
}
}}
 

export const config = {
  matcher: [
    '/',
    '/auth/login',
    '/auth/signUp',
    '/addTask',
    '/showTask',
    '/profile/:path*',
    '/api/:path*'
  ]
}