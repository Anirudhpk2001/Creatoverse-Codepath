import { createClient } from '@supabase/supabase-js';

const URL = 'your api url';
const API_KEY = 'your api key'; 
export const supabase = createClient(URL, API_KEY);


