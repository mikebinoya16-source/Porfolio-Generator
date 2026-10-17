
/* =========================
   PORTECH SUPABASE CONFIG
========================= */

const SUPABASE_URL = "https://ddwdxizupqvzebnetsbc.supabase.co";

const SUPABASE_KEY = "sb_publishable_O3BanFgWwHPx0GP7d7VNEw_Rv82wE6z";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
