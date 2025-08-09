import { NextResponse } from 'next/server';
import sql from 'mssql';

export async function POST() {
  try {
    const pool = await sql.connect(process.env.DATABASE_URL as string);
    await pool.request()
      .input('note', sql.NVarChar(100), 'hello from Next.js')
      .query('INSERT INTO dbo.Ping (note) VALUES (@note);');
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const pool = await sql.connect(process.env.DATABASE_URL as string);
    const result = await pool.request()
      .query('SELECT TOP 5 * FROM dbo.Ping ORDER BY id DESC;');
    return NextResponse.json({ ok: true, rows: result.recordset });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

