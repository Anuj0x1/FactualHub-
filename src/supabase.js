import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sprusbifrtdjjhhdmbeq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwcnVzYmlmcnRkampoaGRtYmVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MjIzNTIsImV4cCI6MjAyMDM5ODM1Mn0.a9beVIX4U8O9IXO_ixZUtNIFv-7LKDxNz7nwIDYiA6U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
