import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import "react-native-url-polyfill/auto"
import Constants from 'expo-constants';
// import {SUPABASE_URL, SUPABASE_ANON_KEY} from "@env"

// const supabaseUrl = YOUR_REACT_NATIVE_SUPABASE_URL
// const supabaseAnonKey = YOUR_REACT_NATIVE_SUPABASE_ANON_KEY
// const supabaseUrl = `${SUPABASE_URL}`
// const supabaseAnonKey = `${SUPABASE_ANON_KEY}` 

const supabaseUrl = Constants.expoConfig.extra.supabaseUrl
const supabaseAnonKey = Constants.expoConfig.extra.supabaseAnonKey

// const supabaseUrl = "https://yoowshoxfniryqriaqmh.supabase.co"
// const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlvb3dzaG94Zm5pcnlxcmlhcW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwMTg4MzcsImV4cCI6MTk5NDU5NDgzN30.io-kr65kNdSxc7Mhgc3pQ0ONQrSJ6PqDkEJobBntEQQ"

console.log("supabase url:", supabaseUrl)
console.log("supabase anon key:", supabaseAnonKey)

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});