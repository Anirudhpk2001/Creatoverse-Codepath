import { createClient } from '@supabase/supabase-js';

const URL = 'https://grhtmhmdnrkdkxmqhvkm.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyaHRtaG1kbnJrZGt4bXFodmttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3Mjk0NjQsImV4cCI6MjA2NjMwNTQ2NH0.zgok_ixUVij29gTnjXqNkdvox4rcG-F8TwFZ_Ol2xi8'; 
export const supabase = createClient(URL, API_KEY);


