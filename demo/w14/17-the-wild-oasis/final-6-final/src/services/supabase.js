import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sgtwgxsjtbibcbrzrfra.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNndHdneHNqdGJpYmNicnpyZnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjI5NjQsImV4cCI6MjAwMTg5ODk2NH0.DSXsHYJOUjW3z5tJyNO6qxjBOuJKqH2H0szLeF1-mDA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
