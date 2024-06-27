import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string | undefined =
  "https://qizuvylzwakanxmymvha.supabase.co";
const supabaseAnonKey: string | undefined =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpenV2eWx6d2FrYW54bXltdmhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MTYyMDgsImV4cCI6MjAzNDk5MjIwOH0.SKhBYMDw5n-1xdiqDRnBh69OGbn6cqT4wFbCgL-X0A0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
