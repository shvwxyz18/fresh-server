const { createClient } = supabase
const supabaseUrl = 
const supabaseKey = 

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
