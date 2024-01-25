const { createClient } = supabase
const supabaseUrl = 'https://xwcmoxjxyuyxnjyolylx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3Y21veGp4eXV5eG5qeW9seWx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxNTQxMzYsImV4cCI6MjAyMTczMDEzNn0.4JJ6HvnD4EEiTKypwLB7uzOdosBehsqo-RbDMeXR1sQ';
const _supabase = createClient(supabaseUrl, supabaseKey);

async function addApple() {
    const store = document.getElementById('store').value;
    const { error } = await _supabase.from('apple').insert([
        { store: store }
    ]);
    window.location.href = './done.html';
}

async function addBanana() {
    const store = document.getElementById('store').value;
    const { error } = await _supabase.from('banana').insert([
        { store: store }
    ]);
    window.location.href = './done.html';
}

async function addOnion() {
    const store = document.getElementById('store').value;
    const { error } = await _supabase.from('onion').insert([
        { store: store }
    ]);
    window.location.href = './done.html';
}

async function addPotato() {
    const store = document.getElementById('store').value;
    const { error } = await _supabase.from('potato').insert([
        { store: store }
    ]);
    window.location.href = './done.html';
}