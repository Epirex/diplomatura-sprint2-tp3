import mongoose from 'mongoose';

export async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://estebanguzzo:WUxXObcf41DR5630@sprint2tp3.h7xzvqf.mongodb.net/');
        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
}
