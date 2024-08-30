import { SupabaseAdapter } from "@common-module/supabase";
import { WalletTokenManager } from "@common-module/wallet";

export default async function init() {
  SupabaseAdapter.init({
    supabaseUrl: "https://vmupqxwvlmseafwjkzck.supabase.co",
    supabaseKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtdXBxeHd2bG1zZWFmd2premNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwNjY0NzIsImV4cCI6MjAzNzY0MjQ3Mn0.iU_55iFWJ9XLeONxMq3mrdQoCFjyAvbdPe5Lbtcl3E4",
    tokenManager: new WalletTokenManager(),
  });
}
